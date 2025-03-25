export async function fetchMetaobjectImage(metaobjectType: string, metaobjectHandle: string) {
    const query = `
      {
        metaobject(handle: { type: "${metaobjectType}", handle: "${metaobjectHandle}" }) {
          fields {
            key
            value
            reference {
              ... on MediaImage {
                image {
                  url
                }
              }
            }
          }
        }
      }
    `;
  
    const response = await fetch(`https://${process.env.SHOPIFY_STORE_URL}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query }),
    });
  
    const json = await response.json();
    const fields = json.data?.metaobject?.fields || [];
  
    // Find the 'logo' field
    const logoField = fields.find((field: any) => field.key === "logo");
    return logoField?.reference?.image?.url || null;
  }
  

  export async function fetchSocialMediaLinks(metaobjectType: string, metaobjectHandle: string) {
    const query = `
      {
        metaobject(handle: { type: "${metaobjectType}", handle: "${metaobjectHandle}" }) {
          fields {
            key
            value
          }
        }
      }
    `;
  
    const response = await fetch(`https://${process.env.SHOPIFY_STORE_URL}/api/2024-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_STOREFRONT_TOKEN!,
      },
      body: JSON.stringify({ query }),
    });
  
    const json = await response.json();
    const fields = json.data?.metaobject?.fields || [];
  
    // Convert fields array to an object { facebook: "url", twitter: "url", etc. }
    const socialLinks: Record<string, string> = {};
    fields.forEach((field: any) => {
      socialLinks[field.key] = field.value;
    });
  
    return socialLinks;
  }
  