import { NextResponse } from "next/server";

const SHOPIFY_STORE = process.env.SHOPIFY_STORE!;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN!;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

  
    const searchResponse = await fetch(
      `https://${SHOPIFY_STORE}/admin/api/2025-01/customers/search.json?query=email:${encodeURIComponent(
        email
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    const searchData = await searchResponse.json();

    if (!searchResponse.ok) {
      console.error("Shopify Search Error:", searchData);
      return NextResponse.json(
        { error: "Failed to search for customer." },
        { status: searchResponse.status }
      );
    }

    if (searchData.customers && searchData.customers.length > 0) {
      const existingCustomerId = searchData.customers[0].id;

     
      const updateResponse = await fetch(
        `https://${SHOPIFY_STORE}/admin/api/2025-01/customers/${existingCustomerId}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
          },
          body: JSON.stringify({
            customer: {
              id: existingCustomerId,
              accepts_marketing: true,
              marketing_opt_in_level: "single_opt_in",
              email_marketing_consent: {
                state: "subscribed",
                opt_in_level: "single_opt_in",
                consent_updated_at: new Date().toISOString(),
              },
            },
          }),
        }
      );

      const updateData = await updateResponse.json();

      if (!updateResponse.ok) {
        console.error("Shopify Update Error:", updateData);
        return NextResponse.json(
          { error: "Failed to update subscription." },
          { status: updateResponse.status }
        );
      }

      return NextResponse.json({
        message: "Email already existed, now subscribed!",
      });
    }

    const createResponse = await fetch(
      `https://${SHOPIFY_STORE}/admin/api/2025-01/customers.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          customer: {
            email,
            accepts_marketing: true,
            marketing_opt_in_level: "single_opt_in",
            email_marketing_consent: {
              state: "subscribed",
              opt_in_level: "single_opt_in",
              consent_updated_at: "2025-03-25T10:10:00Z",
            },
          },
        }),
      }
    );

    const createData = await createResponse.json();

    if (!createResponse.ok) {
      console.error("Shopify Create Error:", createData);
      return NextResponse.json(
        { error: "Failed to create and subscribe customer." },
        { status: createResponse.status }
      );
    }

    return NextResponse.json({ message: "Email subscribed successfully!" });
  } catch (error) {
    console.error("Shopify API Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
