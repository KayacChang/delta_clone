import React, { useEffect, useState } from "react";

type HookFunc = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export default function useOpen(init = false): HookFunc {
  const [open, setOpen] = useState(init);

  useEffect(() => {
    open && window.scrollTo({ top: 0 });

    Object.assign(window.document.body.style, {
      overflow: open ? "hidden" : "auto",
    });
  }, [open]);

  return [open, setOpen];
}
