import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
    CollapsibleTrigger,
    CollapsibleContent,
    Collapsible,
  } from "@/components/ui/collapsible";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogDescription,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Navbar = () => {
    return (
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-800 [&[data-state=open]>svg]:rotate-90">
                <HomeIcon className="h-4 w-4" />
                가계부
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-1">
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <WalletIcon className="h-4 w-4" />
                    가계부 1
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <CalendarIcon className="h-4 w-4" />
                    가계부 2
                  </Link>
                  <Link
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <BarChartIcon className="h-4 w-4" />
                    가계부 3
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="justify-start gap-2"
                        size="sm"
                        variant="ghost"
                      >
                        <PlusIcon className="h-4 w-4 text-[#666666] dark:text-[#b3b3b3]" />
                        Add Household Ledger
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>새 가계부 만들기</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-6 py-4">
                        <div className="flex items-center justify-between gap-4 flex-nowrap">
                          <Label htmlFor="ledgerName" className="whitespace-nowrap">가계부 이름</Label>
                          <Input className="w-full" id="ledgerName" placeholder="Enter ledger name" type="text" />
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-sm font-medium">가계부 색상</div>
                          <div className="h-8 w-8 rounded-full bg-[#5c6ac4]" />
                          <Button size="sm" variant="outline">
                            Change Color
                          </Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-sm font-medium">나의 색상</div>
                          <div className="h-8 w-8 rounded-full bg-[#5ccac4]" />
                          <Button size="sm" variant="outline">
                            Change Color
                          </Button>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-medium">Team Colors</div>
                            <Button size="sm" variant="outline">
                              Invite
                            </Button>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#de3618]" />
                              <div className="text-sm">John</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#f1c40f]" />
                              <div className="text-sm">Sarah</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#2ecc71]" />
                              <div className="text-sm">Alex</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-[#9b59b6]" />
                              <div className="text-sm">Emily</div>
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="monthlyGoal">Monthly Goal</Label>
                            <Input className="w-24" id="monthlyGoal" type="number" />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="annualGoal">Annual Goal</Label>
                            <Input className="w-24" id="annualGoal" type="number" />
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="ghost">Cancel</Button>
                        <Button type="submit">Save</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
              href={"/api/boards"}
            >
              <CalendarIcon className="h-4 w-4" />
              커뮤니티
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              href="/api/point/1"
            >
              <WalletIcon className="h-4 w-4" />
              포인트 확인
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              href={"/api/login"}
            >
              <WalletIcon className="h-4 w-4" />
              로그인 / 로그아웃
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              href="/api/settings"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
    );
};

function WalletIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    );
  }

  function ShoppingBagIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    );
  }

  
function SettingsIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  function PocketKnifeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
        <path d="M18 6h.01" />
        <path d="M6 18h.01" />
        <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
        <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
      </svg>
    );
  }

  function PiggyBankIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
        <path d="M2 9v1c0 1.1.9 2 2 2h1" />
        <path d="M16 11h0" />
      </svg>
    );
  }

  
function HospitalIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 6v4" />
        <path d="M14 14h-4" />
        <path d="M14 18h-4" />
        <path d="M14 8h-4" />
        <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
        <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
      </svg>
    );
  }

  function HomeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }

  function GiftIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    );
  }

  function CarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    );
  }

  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  
function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    );
  }

  function BarChartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    );
  }

  function ChevronRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    );
  }

  function PlusIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    );
  }


export default Navbar;
