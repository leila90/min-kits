"use client"
import Image from "next/image";

const IMAGE = "/images/about11.jpg"

const COL1_TEXT = `The golden ratio appears throughout nature in the spiral of a nautilus shell, the arrangement of seeds in a sunflower, the branching of trees against winter sky. Designers have long borrowed this proportion — 1 to 1.618 — as a guide for composing pages that feel effortlessly balanced to the eye. But proportion alone cannot account for the full mystery of a beautiful spread. There is also rhythm: the breathing space between columns, the margin that frames text like a mount frames a painting. Early typographers called this the "river of white," the invisible current that runs vertically through a justified paragraph when spaces between words align across lines. Skilled compositors worked to eliminate rivers; they were considered a mark of carelessness, a failure to serve the reader's eye.`

const COL2_TEXT = `Every typeface carries within it the ghost of the hand that first drew it. Garamond is inseparable from sixteenth-century Paris, from the smell of oak-gall ink and the weight of a cold composing stick. Caslon belongs to a colonial printing office, oil-lamp lit, the click of type on a composing frame. Even our digital faces — designed on screens, hinted for pixels — carry this historical weight. The designer who chooses a typeface is not merely picking a style; they are invoking a lineage, borrowing authority from centuries of readers who have encountered those particular curves and accepted them as trustworthy. This is why font pairing matters so deeply: a clash of typefaces is a clash of eras, a collision of incompatible credibilities. Ink and paper have given way to phosphor and pixel, yet the fundamental challenge remains unchanged: how do you move a mind from one sentence to the next without losing it? Attention is fragile. The eye needs a path. Hierarchy — the system of sizes and weights that tells the reader which words matter most — is the designer's primary tool for managing this journey through a page.`


// ── Component ─────────────────────────────────────────────────────────────────

export function MagazineEditorialColumns() {
    return (
        <section className="bg-white py-16 mb-16">
            <div className="mx-auto px-30">
                {/* Masthead */}
                <div className="mb-8 flex items-center justify-between border-y-1 border-black py-2">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase">
            The Editorial Review
          </span>
                    <span className="font-sans text-xs tracking-widest text-neutral-500 uppercase">
            Spring 2026
          </span>
                </div>

                {/* Title */}
                <div className="relative mb-8 overflow-hidden">
                    <div
                        className="pointer-events-none absolute inset-0 flex items-end select-none"
                        aria-hidden
                    >
            <span
                className="block font-sans text-[clamp(4rem,15vw,10rem)] leading-none font-black tracking-tighter text-black/[0.05]">
              MinKits
            </span>
                    </div>
                    <div className="relative">
                        <h2 className="mb-2 font-sans text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase">
                            Essay
                        </h2>
                        <h1 className="font-serif text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] font-bold text-black">
                            On Proportion, Rhythm,
                            <br/>
                            and the Weight of Type
                        </h1>
                        <p className="mt-3 font-sans text-sm text-neutral-500">
                            By Marcus Veldtman &nbsp;·&nbsp; Photography: Arno Brisse
                        </p>
                    </div>
                </div>

                {/* Pull quote */}
                <div className="mb-8 border-t-4 border-black"/>

                {/* Drop cap intro */}
                <div className="mb-8 font-serif text-lg leading-relaxed text-neutral-800 text-justify">
          <span className="float-left mt-1 mr-2 font-serif text-[4.5rem] leading-[0.75] font-black text-black">
            T
          </span>
                    he golden ratio appears throughout nature — and throughout the history
                    of typographic design, designers have borrowed this ancient proportion
                    as a guide for composing pages that feel effortlessly balanced,
                    drawing the eye along invisible currents of white space.
                </div>

                {/* Measurement wrapper — containerRef always present regardless of layout mode */}
                <div className="mb-8 border-t-2 border-black py-2">
                   <div className="flex md:flex-row flex-col">
                       <div className=" basis-1/2 items-center text-justify px-5 mt-0">
                           {COL1_TEXT}
                           <div className="flex items-center justify-center px-10">
                           <Image
                               src={IMAGE}
                               alt="Portrait"
                               className="pointer-events-none items-center"
                               width={400}
                               height={200}
                           />
                           </div>
                       </div>
                       <div className=" basis-1/2 items-center text-justify px-5 mt-0">
                           {COL2_TEXT}
                       </div>
                   </div>
                </div>
                {/* Footer */}
                <div className="mt-10 border-t border-neutral-200 pt-4 font-sans">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                        <span className="tracking-widest uppercase">Arts & Letters</span>
                        <span>Page 14 of 48</span>
                        <span className="tracking-widest uppercase">
              The Editorial Review
            </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
