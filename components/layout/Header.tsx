import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../common/Button'

const Header: React.FC = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-gray-100 shadow-md'>
    <div className='flex items-center space-x-4'>
      <input type="text" placeholder="Search Apartments..." className="p-2 border rounded w-150"  />
        <FaSearch />
    </div>
    <div className='flex items-center space-x-4'>
        <Button 
        title="sign in"
        style="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        />
        <Button
        title="sign up"
        style="bg-white-500 text-black p-2 rounded hover:bg-white-600"
        />
    </div>
    </div>
  )
}

export default Header
