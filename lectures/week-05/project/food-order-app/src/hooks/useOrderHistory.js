import { useCallback, useEffect, useState } from "react";
import { fetchOrders } from "../services/orderService";

export function useOrderHistory() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadOrders = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetchOrders();
            setOrders(response);
        } catch (requestError) {
            setError(requestError.message || "Sipariş geçmişi alınamadı!")
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        loadOrders();
    }, []);

    return{
        orders,
        loading,
        error,
        refresh: loadOrders,
    }
}