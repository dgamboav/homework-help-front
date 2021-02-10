import React from 'react';

const MainLayout = (props) => {
    
    const { children } = props;
    
    return (
        <div>
            <main>
                { children }
            </main>
        </div> 
     );
}
 
export default MainLayout;