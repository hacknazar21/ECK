import React, { useContext } from "react";
import ButtonWithDangerous from "../../../common/ButtonWithDangerous";
import useHttp from "../../../../hooks/hooks.http";
import { useRouter } from "next/router";
import { AuthContext } from "../../../../context/AuthContext";

function Control({ project }) {
  const { loading, request } = useHttp();
  const router = useRouter();
  const { token } = useContext(AuthContext);

  return (
    <div>
      <div className="window-notification__buttons"></div>
    </div>
  );
}

export default Control;
