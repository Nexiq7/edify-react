import { useState, useEffect } from "react";
import type { User } from "../types";

export function useProfile(): User | null {
     const [user, setUser] = useState<User | null>(null);

     useEffect(() => {
          const fetchProfile = async () => {
               try {
                    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/profile`, { credentials: "include" })
                    const data = await response.json();
                    setUser(data);
               } catch (error) {
                    console.error("Error fetching profile:", error);
               }
          };
          fetchProfile();
     }, []);

     return user;
}
