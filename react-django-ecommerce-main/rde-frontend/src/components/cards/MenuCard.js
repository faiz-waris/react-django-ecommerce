import React from 'react'

function MenuCard() {
    return (
        <div className='product-menu'>
                <div className='product-menu-card'>
                    <div className="menu-header">
                        Sort
                    </div>
                    <div className="line-h"/>                                        
                        <input type='checkbox'/>A-Z                    
                    <div className="menu-header">
                        Filter
                    </div>
                    <div className="line-h"/>
                </div>
            </div>
    )
}

export default MenuCard
