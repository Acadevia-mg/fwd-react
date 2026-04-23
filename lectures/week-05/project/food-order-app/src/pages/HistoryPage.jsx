import { useMemo } from "react";
import ErrorState from "../components/ErrorState";
import PageLoader from "../components/PageLoader";
import { useOrderHistory } from "../hooks/useOrderHistory";
import styles from "./HistoryPage.module.css";

function formatDate(dateString) {
    return new Intl.DateTimeFormat("tr-TR", {
        dateStyle: "medium", //18 Nis 2026
        timeStyle: "short"
    }).format(new Date(dateString));
}

export default function HistoryPage() {
    const { orders, error, loading, refresh } = useOrderHistory();

    const totalRevenue = useMemo(() => {
        return orders.reduce((sum, order) => sum + order.totalAmount, 0);
    }, [orders])

    return (
        <div className="page-section">
            <section className={`${styles.hero} panel`}>
                <div className="section-heading">
                    <p className="pill">Order History</p>
                    <h2>Geçmiş siparişleri localStorage üzerinden okuyoruz.</h2>
                    <p>
                        Normal projede bu veri backend'den gelir. Burada odak React olduğu için
                        yapıyı localStorage ile simüle ediyoruz.
                    </p>
                </div>

                <div className={styles.heroStats}>
                    <div>
                        <strong>{orders.length}</strong>
                        <span>Toplam sipariş</span>
                    </div>
                    <div>
                        <strong>₺{totalRevenue.toFixed(2)}</strong>
                        <span>Toplam ciro</span>
                    </div>
                </div>
            </section>

            {loading ? <PageLoader label="Sipariş geçmişi yükleniyor..." /> : null}

            {!loading && error ? (
                <ErrorState
                    title="Sipariş geçmişi alınamadı"
                    message={error}
                    onRetry={refresh}
                />
            ) : null}

            {!loading && !error ? (
                <section className={styles.list}>
                    {orders.length === 0 ? (
                        <div className={`${styles.emptyState} panel`}>
                            <h2>Henüz sipariş yok.</h2>
                            <p>Önce sepetten bir sipariş oluşturduğunda burada görünecek.</p>
                        </div>
                    ) : null}

                    {orders.map((order) => (
                        <article key={order.id} className={`${styles.orderCard} panel`}>
                            <div className={styles.orderHeader}>
                                <div>
                                    <p className={styles.orderId}>{order.id}</p>
                                    <h3>{order.customer.name}</h3>
                                </div>

                                <div className={styles.orderMeta}>
                                    <span>{formatDate(order.createdAt)}</span>
                                    <strong>₺{order.totalAmount.toFixed(2)}</strong>
                                </div>
                            </div>

                            <p className={styles.address}>{order.customer.address}</p>

                            <ul className={styles.items}>
                                {order.items.map((item) => (
                                    <li key={item.id}>
                                        <span>
                                            {item.name} x {item.quantity}
                                        </span>
                                        <strong>₺{(item.price * item.quantity).toFixed(2)}</strong>
                                    </li>
                                ))}
                            </ul>

                            {order.customer.note ? (
                                <p className={styles.note}>Not: {order.customer.note}</p>
                            ) : null}
                        </article>
                    ))}
                </section>
            ) : null}
        </div>
    );
}