/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3lHG2NaiJ4H
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function Component() {
  return (
    (<Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button>Create New Transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Create New Transaction</DialogTitle>
          <DialogDescription>Fill out the form below to create a new transaction.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="Enter amount" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="account-type">Account Type</Label>
              <Select id="account-type">
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checking">Checking</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="memo">Memo</Label>
            <Textarea className="min-h-[100px]" id="memo" placeholder="Enter memo" />
          </div>
          <div className="space-y-2">
            <Label>Categories</Label>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="category-1" />
                <Label htmlFor="category-1">Groceries</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-2" />
                <Label htmlFor="category-2">Utilities</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-3" />
                <Label htmlFor="category-3">Entertainment</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-4" />
                <Label htmlFor="category-4">Travel</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-5" />
                <Label htmlFor="category-5">Other</Label>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="photo">Photo</Label>
            <Input id="photo" type="file" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Transaction</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>)
  );
}
