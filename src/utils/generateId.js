export const generateId = (() => {
    let counter = 0;
    return () => {
      const timestamp = Date.now().toString(36);
      const random = Math.random().toString(36).substring(2, 8);
      const count = (counter++).toString(36);
      return `${timestamp}-${random}-${count}`;
    };
  })();
  