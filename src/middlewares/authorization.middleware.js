// Middleware de autorización por roles
export const authorization = (role) => {
    return (req, res, next) => {
      // 1. Verificar si el usuario tiene el rol requerido
      if (req.user.role !== role) {
        return res.status(403).json({ error: "No tienes permiso" });
      }
      next();
    };
  };