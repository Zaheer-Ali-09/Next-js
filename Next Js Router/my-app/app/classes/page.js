import Link from 'next/link'
import React from 'react'


function page() {

    const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <div>
            <h1>All Classes</h1>
            {classes.map((cls) => (
                <div key={cls}>
                    <Link href={`classes/${cls}`}>Class {cls}</Link>
                </div>
            ))}
        </div>
    )
}

export default page
