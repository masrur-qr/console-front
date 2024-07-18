"use client";

import { Order } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AdminOrdersList() {
  const [data, setData] = useState<Order[]>([]);

  async function getOrders() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/get/orders`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
          credentials: "include",
        }
      );
      console.log(response);

      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteOrder(id: string | undefined) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSOLE_API_URL}/delete/order?OrderID=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "DELETE",
          credentials: "include",
        }
      );

      const jsonData = await response.json();

      if (response.status == 200) {
        getOrders();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <section className="flex-grow">
      {data != null ? (
        data.map((order: Order) => {
          return (
            <div
              key={order.Id}
              className="border border-white rounded-xl px-[50px] py-[30px] mb-5"
            >
              <div className="border border-white px-[40px] py-[24px] flex items-center justify-between mb-10">
                <Link
                  href={{
                    pathname: `/en/admin-orders/${order.Id}`,
                    // query: { id: order.Id },
                  }}
                  className="flex items-center gap-10"
                >
                  <p className="border-r pr-5 w-[150px]">{order.name}</p>
                  <p className="border-r pr-5 w-[150px]">{order.phone}</p>
                  <p>{order.email}</p>
                </Link>
                <button onClick={() => deleteOrder(order.Id)}>Delete</button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No orders yet</p>
      )}
    </section>
  );
}
