import RakhiCard from "./Cart";

const rakhis = [
    {
        id: 1,
        title: "Radiant Thread Of Love Rhodium...",
        price: 899,
        discount: "56% Off",
        image: "https://img.freepik.com/premium-photo/rakhi-festival-background-design-with-creative-rakhi-illustration-ai-generated_852336-16468.jpg",
        label: "Pure Silver",
        currentPrice: 899 - (899 * 0.56),
    },
    {
        id: 2,
        title: "Eternal Bond Rhodium-Plated 92...",
        price: 699,
        discount: "66% Off",
        image: "https://tse1.mm.bing.net/th/id/OIP.ExPqzxdoHx5XB1YZSyAOwgHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
        label: "Pure Silver",
        currentPrice: 699 - (699 * 0.66),
    },
    {
        id: 3,
        title: "Eternal Bond Rhodium-Plated 92...",
        price: 699,
        discount: "66% Off",
        image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-evil-eye-rakhi-set-of-2-285627-m.jpg",
        label: "Pure Silver",
        currentPrice: 699 - (699 * 0.66),
    },
    
];

console.log(rakhis);



export default function TrendingRakhis() {
    return (
        <section className="my-8 px-4">
            <h2 className="text-2xl font-bold mb-6">Trending Rakhis</h2>
            <div className="flex gap-8 justify-center items-center">
                {rakhis.map(rakhi => (
                    <RakhiCard key={rakhi.id} rakhi={rakhi} />
                ))}
            </div>
        </section>
    );
}
