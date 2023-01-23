import React from 'react';
import blob from '../../Assets/blobHeaderShape.png';
import JoinToday from '../../Shared/joinToday/JoinToday';
import JoinWithUs from '../../Shared/JoinWithUsBanner/JoinWithUs';

const Home = () => {
    return (
        <div className=''>

            {/* Header section start  */}
            <div className="bg-no-repeat bg-right-top pt-20 h-screen" style={{ backgroundImage: `url(${blob})` }}>
            </div>
            <JoinWithUs />
            <JoinToday />
        </div>
    );
};

export default Home;