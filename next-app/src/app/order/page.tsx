import { redirect } from 'next/navigation'
import OrderMenu from '../../components/Menu/OrderMenu'
import Footer from '../../components/Footer/Footer'
import styles from './page.module.css'

const ORDER_REDIRECT_URL = 'https://www.order.store/ca/store/asian-yummy-one/8Sp7qjGqXpiQo5HXfF043g?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjE1JTIwRnJhc2VyJTIwU3QlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjIyYTIzYzRlOC1hMjc2LTAyYjUtZjUyMi1lYjZmMWRjYzk1MTQlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQ0LjMxODAwNDglMkMlMjJsb25naXR1ZGUlMjIlM0EtNzkuODg0NTE1OCU3RA%3D%3D'
const ORDER_PAGE_ENABLED = process.env.SHOW_ORDER_PAGE === 'true'

export default function OrderPage() {
  if (!ORDER_PAGE_ENABLED) {
    redirect(ORDER_REDIRECT_URL)
  }

  return (
    <div className="page-shell">
      <main className="content-shell">
        <section className={styles.orderPageHero}>
          <div className={styles.orderPageHeroCopy}>
            <p className={styles.eyebrow}>Order Online</p>
            <h1>Fast pickup and delivery from Asian Yummy One</h1>
            <p className={styles.orderPageDescription}>
              Browse our menu, add items to your cart, and set preparation notes for every dish.
              Your order is ready to build before checkout.
            </p>
          </div>
        </section>
        <OrderMenu />
        <Footer />
      </main>
    </div>
  )
}
