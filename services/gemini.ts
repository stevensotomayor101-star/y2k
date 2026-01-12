
import { GoogleGenAI } from "@google/genai";
import { ManiFantasy } from "../types";

export const generateNailArtImage = async (fantasy: ManiFantasy): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompts = {
    [ManiFantasy.GIMME_GLITZ]: "A close-up shot of hands with long acrylic nails featuring heavy Y2K aesthetic, Las Vegas showgirl glitz, maximum rhinestones, reflective silver and pink chunky glitter, butterfly decals, holographic finish, high gloss, 2000s fashion style, bubblegum pink background.",
    [ManiFantasy.POP_PRINCESS]: "A close-up of beautiful Y2K pastel nail art, soft baby pink, cute small butterfly decals, white fluffy clouds on nails, heart patterns, delicate charms, frosted finish, dreamy soft aesthetic, lavender and pink vibes.",
    [ManiFantasy.HOT_FIRE]: "A close-up of fierce Y2K stiletto nails, neon hot pink and bright orange flame designs, checkerboard patterns, bold shapes, high contrast, glossy finish, rebellious 2000s pop-punk aesthetic."
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompts[fantasy] }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating nail art:", error);
    return null;
  }
};
