import { Hono } from "hono";

export type AppType = Hono<{
  Bindings: {
    cookie: string;
  };
  Variables: {
    userId: string;
  };
}> & {
  $get: () => Promise<{ id: string; name: string; email: string }>;
  auth: {
    login: {
      $post: (input: {
        email: string;
        password: string;
      }) => Promise<{ token: string }>;
    };
    logout: {
      $post: () => Promise<{ success: boolean }>;
    };
  };
  user: {
    getProfile: {
      $get: () => Promise<{ id: string; name: string; email: string }>;
    };
    updateProfile: {
      $post: (input: {
        name: string;
        email: string;
      }) => Promise<{ success: boolean }>;
    };
  };
  todo: {
    create: {
      $post: (input: {
        id: string;
        title: string;
      }) => Promise<{ message: string }>;
    };
    list: {
      $get: () => Promise<{ todos: { id: string; title: string }[] }>;
    };
  };
};
