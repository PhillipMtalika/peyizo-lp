import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

export const SOCIAL_IMAGE_ALT =
  "Peyizo — virtual accounts and virtual Visa cards";

const markData = await readFile(
  join(process.cwd(), "assets/peyizo-mark.png"),
  "base64"
);
const markSrc = `data:image/png;base64,${markData}`;

/**
 * Shared share-card artwork for Open Graph and Twitter cards. Rendered at build
 * time by next/og so the social preview shows the Peyizo logo and positioning
 * rather than a framework default. Uses flexbox only, per Satori's CSS support.
 */
export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#06070a",
          backgroundImage:
            "linear-gradient(135deg, #0b1015 0%, #06070a 55%, #0c1108 100%)",
          padding: "70px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -160,
            width: 560,
            height: 560,
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#C9F55E",
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -180,
            bottom: -220,
            width: 520,
            height: 520,
            display: "flex",
            borderRadius: "50%",
            backgroundColor: "#72E5C3",
            opacity: 0.06,
          }}
        />

        {/* Brand lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={markSrc}
            width={74}
            height={74}
            style={{ display: "flex", borderRadius: 18 }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginLeft: 22,
            }}
          >
            <span
              style={{
                fontSize: 46,
                fontWeight: 700,
                letterSpacing: -2,
                color: "#ffffff",
              }}
            >
              peyizo
            </span>
            <span
              style={{
                fontSize: 46,
                fontWeight: 700,
                letterSpacing: -2,
                color: "#C9F55E",
              }}
            >
              .
            </span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -5,
              lineHeight: 1.04,
              color: "#ffffff",
            }}
          >
            One account.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -5,
              lineHeight: 1.04,
              color: "#C9F55E",
            }}
          >
            Spend anywhere.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 29,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Virtual account details and a virtual Visa card,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 29,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.55)",
            }}
          >
            with controls that stay in your hands.
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 1,
              marginBottom: 24,
              backgroundColor: "rgba(255,255,255,0.13)",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: 3,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            VIRTUAL ACCOUNTS&nbsp;&nbsp;·&nbsp;&nbsp;VISA CARDS&nbsp;&nbsp;·&nbsp;&nbsp;CARD CONTROLS
          </div>
        </div>
      </div>
    ),
    { ...SOCIAL_IMAGE_SIZE }
  );
}
