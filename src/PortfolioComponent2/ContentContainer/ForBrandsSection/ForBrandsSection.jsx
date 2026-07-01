import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import {
  PhoneOutlined,
  WhatsAppOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: #ffffff;
  overflow: hidden;
`;

/* ---------- Giant background headline ---------- */

const HeadlineBand = styled.div`
  width: 100%;
  padding-top: 10px;
  line-height: 0.78;
  white-space: nowrap;
`;

const Headline = styled.h1`
  margin: 0;
  font-family: "Arial Black", Arial, sans-serif;
  font-weight: 900;
  font-size: clamp(48px, 10vw, 120px);
  color: #1f5f4f;
  letter-spacing: -0.02em;
`;

/* ---------- Content grid: cream panel + image panel ---------- */

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 38%) 1fr;
  /* margin-top: clamp(-90px, -9vw, -80px); */
  margin-top: clamp(-10px, -2vw, -30px);
  position: relative;
  z-index: 5;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

const CreamPanel = styled.div`
  background: #f0e6d2;
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  min-height: 250px;

  @media (max-width: 860px) {
    order: 2;
    padding: 40px 28px;
    min-height: unset;
  }

  @media (max-width: 480px) {
    padding: 32px 20px;
  }
`;

const Eyebrow = styled.h2`
  margin: 0;
  font-size: clamp(30px, 3.2vw, 40px);
  font-weight: 700;
  color: #1f5f4f;
  letter-spacing: -0.01em;
`;

const BodyCopy = styled.p`
  margin: 0;
  max-width: 480px;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 600;
  color: #171717;
`;

const PartnerButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  align-self: flex-start;
  background: transparent;
  border: 1.5px solid #1f5f4f;
  border-radius: 999px;
  padding: 8px 8px 8px 22px;
  font-size: 15px;
  font-weight: 600;
  color: #1f5f4f;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #1f5f4f;
    color: #f0e6d2;

    span {
      background: #f0e6d2;
      color: #1f5f4f;
    }
  }

  &:focus-visible {
    outline: 2px solid #1f5f4f;
    outline-offset: 3px;
  }
`;

const ArrowCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #1f5f4f;
  color: #f0e6d2;
  font-size: 16px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
`;

/* ---------- Image panel ---------- */

const ImagePanel = styled.div`
  position: relative;
  min-height: 420px;
  background: #24493d;
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 860px) {
    order: 1;
    min-height: 320px;
  }
`;

const BackgroundCaption = styled.span`
  position: absolute;
  left: 24px;
  bottom: 24px;
  font-size: clamp(28px, 5vw, 52px);
  font-weight: 800;
  color: rgba(255, 255, 255, 0.14);
  letter-spacing: -0.01em;
  white-space: nowrap;
  z-index: 1;
`;

// const ModelImage = styled.img`
//   position: absolute;
//   inset: 0;
//   width: 50%;
//   height: 100%;
//   object-fit: cover;
//   object-position: center 5%;
//   z-index: 2;
// `;

const ModelImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  height: 100%;
  width: auto;

  object-fit: contain;
  z-index: 2;
`;

const NomineeTab = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 56px;
  background: #141414;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  z-index: 3;

  @media (max-width: 480px) {
    width: 42px;
  }
`;

const NomineeMark = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

const NomineeLabel = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 13px;
  letter-spacing: 0.05em;
  font-weight: 500;
`;

/* ---------- Component ---------- */

export default function ForBrandsSection() {
  return (
    <Wrapper>
      <HeadlineBand>
        <Headline>MD FAIZAN</Headline>
      </HeadlineBand>

      <ContentGrid>
        <CreamPanel>
          <Eyebrow>Let's build together</Eyebrow>
          <BodyCopy>
            Whether it's a full-time role, a freelance build, or something open
            source — I'm always up for building something that ships. Reach out
            and let's talk.
          </BodyCopy>
          <a
            href="https://wa.me/916201855200"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp-btn"
          >
            <PartnerButton type="button">
              WhatsApp
              <ArrowCircle>&rarr;</ArrowCircle>
            </PartnerButton>
          </a>
        </CreamPanel>

        <ImagePanel>
          <BackgroundCaption>MD FAIZAN</BackgroundCaption>
          <ModelImage src="./Images/faizan-3.png" alt="FAIZAN" />
          <NomineeTab>
            <NomineeMark>F.</NomineeMark>
            <NomineeLabel>Software Developer</NomineeLabel>
          </NomineeTab>
        </ImagePanel>
      </ContentGrid>
    </Wrapper>
  );
}
