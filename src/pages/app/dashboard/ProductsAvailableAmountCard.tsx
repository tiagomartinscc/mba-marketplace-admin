import { Store } from '@/components/icons/stote'
import {
  Card,
  CardBadge,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

export function ProductsAvailableAmountCard() {
  return (
    <Card className="flex gap-4">
      <CardBadge>
        <Store className="h-10 w-10 py-6 px-5" />
      </CardBadge>
      <CardContent>
        <CardTitle>24</CardTitle>
        <CardDescription>
          Produtos
          <br />
          vendidos
        </CardDescription>
      </CardContent>
    </Card>
  )
}
