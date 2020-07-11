import React from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";

export default function ScratchPad() {
  return (
    <div className="fakeimg">
      <h1>ScratchPad!</h1>
      <Popup modal trigger={<button>Open</button>}>
        <SignaturePad
          canvasProps={{
            className: "signatureCanvas",
          }}
        />
      </Popup>
    </div>
  );
}
