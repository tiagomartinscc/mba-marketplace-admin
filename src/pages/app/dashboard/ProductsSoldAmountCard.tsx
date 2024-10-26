import { SaleTag } from '@/components/icons/sale-tag'
import {
  Card,
  CardContent,
  CardBadge,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

export function ProductsSoldAmountCard() {
  return (
    <Card className="flex gap-4">
      <CardBadge>
        <SaleTag className="h-10 w-10 py-6 px-5" />
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
