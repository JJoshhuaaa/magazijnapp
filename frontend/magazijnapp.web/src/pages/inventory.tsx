import React, { useEffect, useState } from 'react';

// Define the InventoryItem type
interface InventoryItem {
    id: number;
    name: string;
    quantity: number;
}

const Inventory = () => {
    const [inventory, setInventory] = useState<InventoryItem[]>([]);

    useEffect( () => {
        const fetchInventory = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/controller');
                const response_json = await response.json();
                console.log(response_json);
                setInventory(await response_json);
            } catch (error) {
                console.error('Error fetching inventory data:', error);
            }
        };

        fetchInventory();
    }, []);

    return (
        <div>
            <h1>Inventory</h1>
            <ul>
                {inventory.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;