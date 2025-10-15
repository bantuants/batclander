import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, Package, Heart, LogOut, Edit2, Save, X } from "lucide-react";
import { toast } from "sonner";

interface UserData {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  createdAt: string;
  cart?: any[];
  wishlist?: string[];
  orders?: any[];
}

interface UserProfileProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userData: UserData;
  onUserUpdate: (userData: UserData) => void;
  onLogout: () => void;
}

export function UserProfile({ open, onOpenChange, userData, onUserUpdate, onLogout }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: userData.name,
    email: userData.email,
    phone: userData.phone || "",
    address: userData.address || ""
  });

  useEffect(() => {
    setEditData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone || "",
      address: userData.address || ""
    });
  }, [userData]);

  const handleSaveProfile = () => {
    // Validation
    if (!editData.name || !editData.email) {
      toast.error("Name and email are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(editData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      // Update user data
      const updatedUser: UserData = {
        ...userData,
        name: editData.name,
        email: editData.email,
        phone: editData.phone,
        address: editData.address
      };

      // Update in localStorage
      const users = JSON.parse(localStorage.getItem("bantu_users") || "[]");
      const userIndex = users.findIndex((u: UserData) => u.id === userData.id);
      
      if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem("bantu_users", JSON.stringify(users));
      }

      localStorage.setItem("bantu_current_user", JSON.stringify(updatedUser));
      
      onUserUpdate(updatedUser);
      setIsEditing(false);
      toast.success("Profile updated successfully!");

    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("bantu_user_token");
    localStorage.removeItem("bantu_current_user");
    localStorage.removeItem("bantu_guest_session");
    window.dispatchEvent(new Event('userLogout'));
    onLogout();
    onOpenChange(false);
    toast.success("Logged out successfully");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isGuest = userData.id.startsWith('guest_');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User size={20} />
            {isGuest ? "Guest Profile" : "My Account"}
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                {!isGuest && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
                  >
                    {isEditing ? <X size={16} /> : <Edit2 size={16} />}
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                )}
              </div>

              {isGuest ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <User size={24} className="text-muted-foreground" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">You're browsing as a guest</h4>
                  <p className="text-muted-foreground mb-4">
                    Create an account to save your preferences, track orders, and get personalized recommendations.
                  </p>
                  <Button onClick={() => onOpenChange(false)}>
                    Create Account
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profile-name">Full Name</Label>
                      {isEditing ? (
                        <Input
                          id="profile-name"
                          value={editData.name}
                          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        />
                      ) : (
                        <p className="p-2 bg-muted rounded">{userData.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profile-email">Email</Label>
                      {isEditing ? (
                        <Input
                          id="profile-email"
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        />
                      ) : (
                        <p className="p-2 bg-muted rounded">{userData.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="profile-phone">Phone (Optional)</Label>
                      {isEditing ? (
                        <Input
                          id="profile-phone"
                          value={editData.phone}
                          onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                          placeholder="Enter phone number"
                        />
                      ) : (
                        <p className="p-2 bg-muted rounded">{userData.phone || "Not provided"}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Member Since</Label>
                      <p className="p-2 bg-muted rounded">{formatDate(userData.createdAt)}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profile-address">Address (Optional)</Label>
                    {isEditing ? (
                      <Input
                        id="profile-address"
                        value={editData.address}
                        onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                        placeholder="Enter your address"
                      />
                    ) : (
                      <p className="p-2 bg-muted rounded">{userData.address || "Not provided"}</p>
                    )}
                  </div>

                  {isEditing && (
                    <div className="flex gap-2 pt-4">
                      <Button onClick={handleSaveProfile}>
                        <Save size={16} className="mr-2" />
                        Save Changes
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Order History</h3>
              {userData.orders && userData.orders.length > 0 ? (
                <div className="space-y-4">
                  {userData.orders.map((order, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Order #{order.id}</span>
                        <Badge variant={order.status === 'delivered' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.items?.length || 0} items • ${order.total || '0.00'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(order.date)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Package size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No orders yet</p>
                  <p className="text-sm text-muted-foreground">Your order history will appear here</p>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">My Wishlist</h3>
              {userData.wishlist && userData.wishlist.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {userData.wishlist.map((itemId, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <p className="text-sm">Item #{itemId}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Move to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Heart size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No items in wishlist</p>
                  <p className="text-sm text-muted-foreground">Save items you love for later</p>
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates about orders and promotions</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Privacy Settings</p>
                    <p className="text-sm text-muted-foreground">Manage your data and privacy preferences</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Password</p>
                    <p className="text-sm text-muted-foreground">Change your account password</p>
                  </div>
                  <Button variant="outline" size="sm">Change</Button>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    variant="destructive" 
                    onClick={handleLogout}
                    className="w-full"
                  >
                    <LogOut size={16} className="mr-2" />
                    {isGuest ? "End Guest Session" : "Sign Out"}
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}