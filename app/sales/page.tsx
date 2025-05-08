"use client"

import { useState } from "react"
import Image from "next/image"
import { Bell, Box, Check, Download, FileText, Phone, Search, X } from "lucide-react"

import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SalesRepDashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[auto_1fr]">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
          <div className={cn("w-full flex-1", isCollapsed ? "ml-0" : "")}>
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search orders..."
                  className="w-full appearance-none bg-white pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E30613] text-[10px] font-medium text-white">
              5
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Avatar"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Sales Representative Portal</h1>
            <Button variant="outline" size="sm" className="ml-auto gap-1">
              <Download className="h-3.5 w-3.5" />
              <span>Export</span>
            </Button>
          </div>
          <Tabs defaultValue="orders" className="space-y-4">
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="kampala">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Branches</SelectItem>
                      <SelectItem value="kampala">Kampala Central</SelectItem>
                      <SelectItem value="entebbe">Entebbe</SelectItem>
                      <SelectItem value="jinja">Jinja</SelectItem>
                      <SelectItem value="mbarara">Mbarara</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </div>
              </div>
              <Card>
                <CardHeader className="px-6 py-4">
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Manage and update customer orders.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="pl-6">Order ID</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Products</TableHead>
                        <TableHead>Branch</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right pr-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium pl-6">#ORD-1234</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>John Doe</span>
                            <span className="text-xs text-gray-500">+256 712 345 678</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>Excellium Fuel</span>
                            <span className="text-xs text-gray-500">200 Liters</span>
                          </div>
                        </TableCell>
                        <TableCell>Kampala Central</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Completed
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">View Details</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Phone className="h-4 w-4" />
                              <span className="sr-only">Contact Customer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">#ORD-1235</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>Jane Smith</span>
                            <span className="text-xs text-gray-500">+256 772 987 654</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>Cooking Gas</span>
                            <span className="text-xs text-gray-500">2 Cylinders</span>
                          </div>
                        </TableCell>
                        <TableCell>Entebbe</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            In Progress
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <FileText className="h-4 w-4" />
                              <span className="sr-only">View Details</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Phone className="h-4 w-4" />
                              <span className="sr-only">Contact Customer</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">#ORD-1236</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>Robert Johnson</span>
                            <span className="text-xs text-gray-500">+256 701 234 567</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>Lubricants</span>
                            <span className="text-xs text-gray-500">5 Bottles</span>
                          </div>
                        </TableCell>
                        <TableCell>Jinja</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            New
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <Check className="mr-1 h-3 w-3" />
                              Accept
                            </Button>
                            <Button variant="outline" size="sm" className="h-8">
                              <X className="mr-1 h-3 w-3" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inventory" className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col md:flex-row gap-4 md:items-center">
                  <Select defaultValue="kampala">
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kampala">Kampala Central</SelectItem>
                      <SelectItem value="entebbe">Entebbe</SelectItem>
                      <SelectItem value="jinja">Jinja</SelectItem>
                      <SelectItem value="mbarara">Mbarara</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Inventory Report
                  </Button>
                  <Button size="sm">
                    <Box className="mr-2 h-4 w-4" />
                    Add Inventory
                  </Button>
                </div>
              </div>
              <Card>
                <CardHeader className="px-6 py-4">
                  <CardTitle>Branch Inventory</CardTitle>
                  <CardDescription>Current stock levels at Kampala Central branch.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="pl-6">Product</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Current Stock</TableHead>
                        <TableHead>Min. Stock Level</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right pr-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Excellium Fuel</TableCell>
                        <TableCell>Fuel</TableCell>
                        <TableCell>5,000 Liters</TableCell>
                        <TableCell>1,000 Liters</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Sufficient
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Button variant="outline" size="sm">
                            Update Stock
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Regular Fuel</TableCell>
                        <TableCell>Fuel</TableCell>
                        <TableCell>8,500 Liters</TableCell>
                        <TableCell>2,000 Liters</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Sufficient
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Button variant="outline" size="sm">
                            Update Stock
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Cooking Gas (13kg)</TableCell>
                        <TableCell>Gas</TableCell>
                        <TableCell>45 Cylinders</TableCell>
                        <TableCell>20 Cylinders</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Sufficient
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Button variant="outline" size="sm">
                            Update Stock
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Cooking Gas (6kg)</TableCell>
                        <TableCell>Gas</TableCell>
                        <TableCell>15 Cylinders</TableCell>
                        <TableCell>25 Cylinders</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            Low Stock
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Button variant="outline" size="sm">
                            Update Stock
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium pl-6">Engine Oil (1L)</TableCell>
                        <TableCell>Lubricants</TableCell>
                        <TableCell>120 Bottles</TableCell>
                        <TableCell>50 Bottles</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Sufficient
                          </span>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <Button variant="outline" size="sm">
                            Update Stock
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
