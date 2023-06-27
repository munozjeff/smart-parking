import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';


function MyComponent(props) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const docRef = db.collection('motos').doc(props.placa);
            const doc = await docRef.get();
            if (doc.exists) {
                setData(doc.data());
            } else {
                console.log("No such document!");
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {data && <QRCode value={JSON.stringify(data)} />}
        </div>
    );
}

export {MyComponent};
