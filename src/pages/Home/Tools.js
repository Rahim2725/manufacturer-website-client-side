import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sherad/Loading';
import Tool from './Tool';

const Tools = () => {

    const { data: tools, isLoading} = useQuery('users', () => fetch('http://localhost:5000/tools').then(res => res.json()))

    
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='text-center mt-32'>
            <h1 className='text-3xl'>Tools</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5'>
                {
                    tools.map(tool => <Tool
                    key={tool._id}
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;