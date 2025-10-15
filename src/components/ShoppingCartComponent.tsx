import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, Heart, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
  size?: string;
}

interface UserData {
  id: string;
  email: string;
  name: string;
  cart?: CartItem[];
  wishlist?: string[];
  orders?: any[];
}

interface ShoppingCartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userData: UserData | null;
  onUserUpdate?: (userData: UserData) => void;
  onLoginRequired?: () => void;
}

export function ShoppingCartComponent({ open, onOpenChange, userData, onUserUpdate, onLoginRequired }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    if (userData?.cart) {
      setCartItems(userData.cart);
    } else {
      // Load cart from localStorage for guests
      const savedCart = localStorage.getItem("bantu_guest_cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, [userData]);

  const updateCart = (newCartItems: CartItem[]) => {
    setCartItems(newCartItems);

    if (userData && !userData.id.startsWith('guest_')) {
      // Update user cart in localStorage
      const updatedUser = { ...userData, cart: newCartItems };
      const users = JSON.parse(localStorage.getItem("bantu_users") || "[]");
      const userIndex = users.findIndex((u: UserData) => u.id === userData.id);
      
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("bantu_users", JSON.stringify(users));
        localStorage.setItem("bantu_current_user", JSON.stringify(updatedUser));
        onUserUpdate?.(updatedUser);
      }
    } else {
      // Save to guest cart
      localStorage.setItem("bantu_guest_cart", JSON.stringify(newCartItems));
    }
  };

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(itemId);
      return;
    }

    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updatedItems);
  };

  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    updateCart(updatedItems);
    toast.success("Item removed from cart");
  };

  const moveToWishlist = (itemId: string) => {
    const item = cartItems.find(item => item.id === itemId);
    if (!item) return;

    if (!userData || userData.id.startsWith('guest_')) {
      toast.error("Please sign in to use wishlist");
      return;
    }

    // Remove from cart
    removeItem(itemId);

    // Add to wishlist
    const updatedUser = {
      ...userData,
      wishlist: [...(userData.wishlist || []), itemId]
    };

    const users = JSON.parse(localStorage.getItem("bantu_users") || "[]");
    const userIndex = users.findIndex((u: UserData) => u.id === userData.id);
    
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("bantu_users", JSON.stringify(users));
      localStorage.setItem("bantu_current_user", JSON.stringify(updatedUser));
      onUserUpdate?.(updatedUser);
    }

    toast.success("Item moved to wishlist");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = (subtotal: number) => {
    return subtotal * 0.08; // 8% tax rate
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 50 ? 0 : 5.99; // Free shipping over $50
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const shipping = calculateShipping();
    return subtotal + tax + shipping;
  };

  const handleCheckout = async () => {
    if (!userData) {
      onLoginRequired?.();
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    if (userData.id.startsWith('guest_')) {
      toast.error("Please create an account to complete checkout");
      onLoginRequired?.();
      return;
    }

    setIsCheckingOut(true);

    try {
      // Simulate checkout process
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create order
      const order = {
        id: `order_${Date.now()}`,
        items: cartItems,
        subtotal: calculateSubtotal(),
        tax: calculateTax(calculateSubtotal()),
        shipping: calculateShipping(),
        total: calculateTotal(),
        date: new Date().toISOString(),
        status: 'processing'
      };

      // Add to user orders
      const updatedUser = {
        ...userData,
        orders: [...(userData.orders || []), order],
        cart: []
      };

      const users = JSON.parse(localStorage.getItem("bantu_users") || "[]");
      const userIndex = users.findIndex((u: UserData) => u.id === userData.id);
      
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("bantu_users", JSON.stringify(users));
        localStorage.setItem("bantu_current_user", JSON.stringify(updatedUser));
        onUserUpdate?.(updatedUser);
      }

      // Clear cart
      setCartItems([]);
      localStorage.removeItem("bantu_guest_cart");

      toast.success("Order placed successfully!");
      onOpenChange(false);

    } catch (error) {
      toast.error("Checkout failed. Please try again.");
    }

    setIsCheckingOut(false);
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping();
  const total = calculateTotal();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart size={20} />
            Shopping Cart ({cartItems.length})
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-muted-foreground mb-4">Add some items to get started</p>
              <Button onClick={() => onOpenChange(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                  <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-md" />
                    ) : (
                      <div className="text-xs text-center">No Image</div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium line-clamp-1">{item.title}</h4>
                    {item.variant && (
                      <p className="text-sm text-muted-foreground">{item.variant}</p>
                    )}
                    {item.size && (
                      <Badge variant="secondary" className="text-xs mt-1">
                        Size: {item.size}
                      </Badge>
                    )}
                    
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium">${item.price.toFixed(2)}</span>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={12} />
                        </Button>
                        
                        <span className="w-8 text-center">{item.quantity}</span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={12} />
                        </Button>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => moveToWishlist(item.id)}
                        className="text-xs h-6 px-2"
                      >
                        <Heart size={12} className="mr-1" />
                        Wishlist
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-xs h-6 px-2 text-destructive hover:text-destructive"
                      >
                        <Trash2 size={12} className="mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <Badge variant="secondary" className="text-xs">FREE</Badge>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2">
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground text-center">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              
              <Button 
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full"
              >
                {isCheckingOut ? "Processing..." : "Checkout"}
                <ArrowRight className="ml-2" size={16} />
              </Button>

              {(!userData || userData.id.startsWith('guest_')) && (
                <p className="text-xs text-muted-foreground text-center">
                  Sign in to save your cart and track orders
                </p>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}