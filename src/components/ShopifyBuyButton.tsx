import { useEffect, useState } from "react";

interface ShopifyBuyButtonProps {
  productId: string;
  className?: string;
}

export function ShopifyBuyButton({ productId, className = "" }: ShopifyBuyButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    
    function loadScript() {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          initializeBuyButton();
        } else {
          loadBuyButtonScript();
        }
      } else {
        loadBuyButtonScript();
      }
    }

    function loadBuyButtonScript() {
      const script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      script.onload = initializeBuyButton;
      document.head.appendChild(script);
    }

    function initializeBuyButton() {
      if (!window.ShopifyBuy || !productId) return;

      const client = window.ShopifyBuy.buildClient({
        domain: "xs0kk2-cz.myshopify.com",
        storefrontAccessToken: "ccdea0eead532e36ebd0dacec8768787",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        // Clean up any existing components
        const existingContainer = document.getElementById(`product-component-${productId}`);
        if (existingContainer && existingContainer.innerHTML.trim()) {
          return;
        }

        ui.createComponent("product", {
          id: productId,
          node: document.getElementById(`product-component-${productId}`),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "system-ui, sans-serif",
                  "font-size": "14px",
                  "padding-top": "8px",
                  "padding-bottom": "8px",
                  ":hover": {
                    "background-color": "#000000",
                  },
                  "background-color": "#1a1a1a",
                  ":focus": {
                    "background-color": "#000000",
                  },
                  "border-radius": "6px",
                  "padding-left": "16px",
                  "padding-right": "16px",
                },
                price: {
                  "font-size": "16px",
                  "color": "#333",
                },
                compareAt: {
                  "font-size": "14px",
                  "color": "#999",
                },
              },
              contents: {
                img: false,
                title: false,
                price: true,
                options: false,
              },
              text: {
                button: "Add to Cart",
              },
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  ":hover": {
                    "background-color": "#000000",
                  },
                  "background-color": "#1a1a1a",
                  ":focus": {
                    "background-color": "#000000",
                  },
                  "border-radius": "6px",
                },
              },
            },
            cart: {
              styles: {
                button: {
                  ":hover": {
                    "background-color": "#000000",
                  },
                  "background-color": "#1a1a1a",
                  ":focus": {
                    "background-color": "#000000",
                  },
                  "border-radius": "6px",
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
            },
          },
        });
        setIsLoaded(true);
      });
    }

    loadScript();
  }, [productId]);

  return (
    <div
      id={`product-component-${productId}`}
      className={`shopify-buy-button ${className}`}
    />
  );
}

// Type declaration for Shopify Buy SDK
declare global {
  interface Window {
    ShopifyBuy: any;
  }
}