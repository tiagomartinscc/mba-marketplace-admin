import { UserMultiple } from '@/components/icons/user-multiple'
import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

export function ViewsAmountCard() {
  return (
    <Card className="flex gap-4">
      <CardBadge>
        <UserMultiple className="h-10 w-10 py-6 px-5" />
      </CardBadge>
      <CardContent>
        <CardTitle>1.238</CardTitle>
        <CardDescription>
          Pessoas
          <br />
          Visitantes
        </CardDescription>
      </CardContent>
    </Card>
  )
}
