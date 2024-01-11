import { CheckCircle2Icon, HelpCircleIcon, XCircleIcon } from 'lucide-react'

export const statuses = [
  // Requires Approval
  {
    value: 'pending approval',
    label: 'Pending Approval',
    icon: HelpCircleIcon,
  },
  {
    value: 'approved',
    label: 'Approved',
    icon: CheckCircle2Icon,
  },
  {
    value: 'rejected',
    label: 'Rejected',
    icon: XCircleIcon,
  },
  // Free Tickets
  {
    value: 'maybe',
    label: 'Maybe',
    icon: HelpCircleIcon,
  },
  {
    value: 'going',
    label: 'Going',
    icon: CheckCircle2Icon,
  },
  {
    value: 'not going',
    label: 'Not going',
    icon: XCircleIcon,
  },
  // Paid Tickets
  {
    value: 'unpaid',
    label: 'Unpaid',
    icon: HelpCircleIcon,
  },
  {
    value: 'paid',
    label: 'Paid',
    icon: CheckCircle2Icon,
  },
  {
    value: 'refunded',
    label: 'Refunded',
    icon: XCircleIcon,
  },
  // Manual Email Invitations
  {
    value: 'pending invite',
    label: 'Pending Invite',
    icon: HelpCircleIcon,
  },
  {
    value: 'accepted invite',
    label: 'Accepted Invite',
    icon: CheckCircle2Icon,
  },
  {
    value: 'declined invite',
    label: 'Declined Invite',
    icon: XCircleIcon,
  },
  {
    value: 'expired invite',
    label: 'Expired Invite',
    icon: XCircleIcon,
  },
]
