import { Router } from "express";
import { authRoutes } from "../auth/routes";
import { userRoutes } from "../user/routes";


export class AppRoutes { 

    static get routes(): Router {
        
        const router = Router();
    
        router.use("/auth", authRoutes());
    
        router.use("/user", userRoutes());
    
        router.use("*", (req, res) => {
          res.status(404).json({ message: "Not Found" });
        });
    
        return router;
      }
}