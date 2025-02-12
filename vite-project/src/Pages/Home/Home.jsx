import { useState, useEffect } from "react"
import Layout from "../../Components/Layout/Layout"
import Card from "../../Components/Card/card"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (

        <Layout>
            Home  bb
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map(item => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>
        </Layout>

    )

}
export default Home