"use client"

import { FetchAllUser } from "@/services/api/userAPI";
import { useEffect, useState } from "react";
import type { User } from "@/types/user";

export default function UserTable(){
const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    const getAllUser = async () => {
      const data = await FetchAllUser()
      setUser(data.data) 
    }
  
    getAllUser()
  }, [])  

  console.log(user)

  return (
    <>
      {user.map((item, index) => (
        <h1
          className="text-white"
          key={index}
        >{item.name}</h1>
      ))}
    </>  
  );
}