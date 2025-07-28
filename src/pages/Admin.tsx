import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  ShoppingCart, 
  AlertTriangle, 
  Recycle, 
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Leaf
} from "lucide-react";

export default function Admin() {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", product: "Premium Compost - 1kg", amount: 200, status: "pending" },
    { id: 2, customer: "Jane Smith", product: "Market Waste Compost - Wheelbarrow", amount: 1300, status: "completed" },
    { id: 3, customer: "Bob Wilson", product: "Restaurant Grade - Pickup truck", amount: 3800, status: "pending" }
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", type: "Individual", status: "active" },
    { id: 2, name: "Green Valley Farm", email: "info@greenvalley.com", type: "Business", status: "active" },
    { id: 3, name: "Jane Smith", email: "jane@example.com", type: "Collector", status: "inactive" }
  ]);

  const [reports, setReports] = useState([
    { id: 1, reporter: "Alice Johnson", location: "Kibera", description: "Illegal dumping near market", status: "pending" },
    { id: 2, reporter: "Peter Kamau", location: "Eastleigh", description: "Overflowing waste bins", status: "verified" },
    { id: 3, reporter: "Mary Wanjiku", location: "Kasarani", description: "Blocked drainage", status: "resolved" }
  ]);

  const updateOrderStatus = (orderId: number, newStatus: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const updateUserStatus = (userId: number, newStatus: string) => {
    setUsers(prev => prev.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const updateReportStatus = (reportId: number, newStatus: string) => {
    setReports(prev => prev.map(report => 
      report.id === reportId ? { ...report, status: newStatus } : report
    ));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "completed":
      case "active":
      case "verified":
      case "resolved":
        return <Badge variant="default"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case "cancelled":
      case "inactive":
        return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const stats = {
    totalOrders: orders.length,
    totalUsers: users.length,
    totalReports: reports.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0)
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CompostConnect Admin</h1>
                <p className="text-xs text-muted-foreground">Management Dashboard</p>
              </div>
            </div>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalReports}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Ksh {stats.totalRevenue.toLocaleString()}</div>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>Manage compost orders and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.product}</p>
                        <p className="text-sm font-semibold">Ksh {order.amount.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(order.status)}
                        <div className="space-x-1">
                          <Button size="sm" onClick={() => updateOrderStatus(order.id, "completed")}>
                            Complete
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => updateOrderStatus(order.id, "cancelled")}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage users, collectors, and handlers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">{user.type}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(user.status)}
                        <div className="space-x-1">
                          <Button size="sm" onClick={() => updateUserStatus(user.id, "active")}>
                            Activate
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => updateUserStatus(user.id, "inactive")}>
                            Deactivate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Illegal Dumping Reports</CardTitle>
                <CardDescription>Moderate and manage dumping reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{report.reporter}</p>
                        <p className="text-sm text-muted-foreground">{report.location}</p>
                        <p className="text-sm">{report.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusBadge(report.status)}
                        <div className="space-x-1">
                          <Button size="sm" onClick={() => updateReportStatus(report.id, "verified")}>
                            Verify
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => updateReportStatus(report.id, "resolved")}>
                            Resolve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}