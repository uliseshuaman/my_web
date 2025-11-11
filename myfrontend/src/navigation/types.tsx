// src/navigation/types.ts
export type RootStackParamList = {
  Usuarios: undefined;
  DetalleUsuario: { user: {
     id: number;
     name: string; 
     email: string 
     } 
    };
};

