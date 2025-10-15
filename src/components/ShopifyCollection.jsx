import { useEffect } from "react";

export default function ShopifyCollection() {
  useEffect(() => {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    
    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    
    function ShopifyBuyInit() {
      var client = window.ShopifyBuy.buildClient({
        domain: 'xs0kk2-cz.myshopify.com',
        storefrontAccessToken: 'ccdea0eead532e36ebd0dacec8768787',
      });
      
      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: '500754743592',
          node: document.getElementById('collection-component-1759959750811'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "width": "calc(25% - 20px)"
                  },
                  "img": {
                    "height": "calc(100% - 15px)",
                    "position": "absolute",
                    "left": "0",
                    "right": "0",
                    "top": "0"
                  },
                  "imgWrapper": {
                    "padding-top": "calc(75% + 15px)",
                    "position": "relative",
                    "height": "0"
                  }
                },
                "button": {
                  "font-family": "Lora, serif",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "40px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                }
              },
              "text": {
                "button": "Add to cart"
              },
              "googleFonts": [
                "Lora"
              ]
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                },
                "button": {
                  "font-family": "Lora, serif",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "40px",
                  "padding-left": "100px",
                  "padding-right": "100px"
                }
              },
              "googleFonts": [
                "Lora"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Lora, serif",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  "background-color": "#000000",
                  ":focus": {
                    "background-color": "#000000"
                  },
                  "border-radius": "40px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Lora"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Lora, serif",
                  "background-color": "#000000",
                  ":hover": {
                    "background-color": "#000000"
                  },
                  ":focus": {
                    "background-color": "#000000"
                  }
                }
              },
              "googleFonts": [
                "Lora"
              ]
            }
          },
        });
      });
    }
  }, []);

  return (
    <div id='collection-component-1759959750811'></div>
  );
}