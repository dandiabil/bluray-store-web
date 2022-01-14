import React from 'react';
import "./CardData.scss"

const CardData = ({label, data}) => {

    return (
        <>
            <div className="description-card">
                <div className="card-header">
                    <p className="label">{label}</p>
                </div>  
                <div className="card-body">
                    <table >
                        {
                            data && data.map((row, i) =>
                                <tr key={i}>
                                    <td id="td1">{row.title}</td>
                                    <td>:</td>
                                    <td>{row.result}</td>
                                </tr>
                            )
                        }
                    </table>
                </div>

            </div>
        </>
    );
}

export default CardData;