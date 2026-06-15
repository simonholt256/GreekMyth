import { NavLink } from "react-router-dom"

import acrop from "../assets/acrop.jpg"

function MoreInfo() {
  return (
    <div className="info-box-container">
      <div className="acrop-image" src={acrop} alt="acrop">
        <div className="info-box">
          <div className="more-info__tags">
            <a href="#context">Context</a>
            <a href="#method">Method</a>
            <a href="#sources">Sources</a>
            <a href="#contact">Contact</a>
          </div>
          <h2 id="context">Mythological Context</h2>
          <p className="more-info-p">It is best to see Greek mythology as a long-developing
            tradition rather than a fixed body of stories with specific
            meanings existing at a single point in time. Its origins likely
            extend back into the Bronze Age (Mycenaean Greece, c. 1600–1100 BCE).
            Evidence from Linear B administrative tablets shows that several major
            deities—such as Zeus, Hera, and Poseidon were already being worshipped
            in some recognisable form during this period. This suggests there was
            already many features of the religious world we would later see in the
            Archaic and the Classical period, even if the myths themselves were not yet fixed narratives. Certainly
            there was some level of continuity of religious figures existing during this
            period of time in which old civilisations would fall and new would arise. 
          </p>
          <p className="more-info-p">
            Following the collapse of the Mycenaean palace system, Greek culture continued
            without large-scale writing for several centuries. During this so-called “Dark Age”
            mythological material was transmitted orally. Oral tradition does not necessarily preserve
            stories verbatim. Instead it maintains stable narrative frameworks and key figures,
            but allows significant variation in detail and emphasis. Within this context, the
            epic traditions associated with Homer were formed. The Iliad and Odyssey, likely
            composed in the 8th century BCE, reflect a synthesis of inherited Bronze Age material,
            later Iron Age social conditions, and the creative work of a long oral poetic tradition.
          </p>
          <p className="more-info-p">
            The introduction of alphabetic writing in the 8th century BCE marks a significant shift,
            as oral traditions began to be recorded and stabilised in written form. At roughly the
            same time, visual culture provides an additional source of evidence for the development
            of myth. Geometric pottery begins to depict recognisable mythological scenes, while from
            the Archaic period onward, vase painting and monumental sculpture increasingly standardise
            and disseminate specific mythic narratives across the Greek world.
          </p>
          <p className="more-info-p">
            Greek religious practices were closely integrated with these mythological figures and ideas.
            The gods were not understood primarily as symbolic figures within literature, but as active
            divine agents embedded in the structure of the natural and social world. Each deity was
            associated with particular domains of influence. Zeus with kingship and the sky. Poseidon with
            the sea. Athena with warfare and civic life. All were given worship through ritual practice.
            This relationship was practical. Individuals and communities engaged with the gods through
            sacrifice, prayer, dedications, and festivals in order to secure favour, protection, and
            success in everyday affairs. Myth, in this context, functioned not only as narrative explanation
            but also as a cultural framework that dictated everyday life.
          </p>
          <p className="more-info-p">
            Taken together, the evidence suggests that Greek mythology should be approached as a dynamic
            system of religious and cultural memory, shaped over centuries through oral transmission,
            evolving ritual practice, and later literary and artistic codification.
          </p>
          <h2 id="method">Categorising Methodology</h2>
          <p className="more-info-p">
            An attempt has been made to organise figures in Greek mythology into categories that
            reflect the roles they play within mythic narratives, while also drawing on modern preferences
            for systematic classification, particularly those based on genealogical relationships.
          </p>
          <p className="more-info-p">
            However, genealogy in Greek myth is inherently unstable. The tradition spans many centuries,
            is transmitted through multiple regional versions, and survives in fragmented literary and artistic
            sources. As a result, the lineage or origin of certain figures is often disputed, with competing
            traditions preserved in different texts or later scholarly accounts. In this context, contradictory
            accounts should not be treated as errors, but as evidence of variation within the tradition itself.
            For practical purposes, a single version is followed in each case, while significant alternative
            traditions are noted where relevant.
          </p>
          <p className="more-info-p">
            It is also important to acknowledge the limitations of the surviving evidence. What remains represents
            only a fraction of a once extensive body of oral and written material, much of which was embedded in
            performance, ritual, and everyday cultural practice. The surviving texts are therefore partial reflections
            of a much broader and more fluid mythological system.
          </p>
          <p className="more-info-p">
            This approach necessarily imposes a degree of structure on material that was not originally systematised
            in a modern sense. Greek myth does not conform neatly to fixed categories, and variation, contradiction,
            and multiplicity are characteristic features of the tradition rather than anomalies. In some cases, what
            appears contradictory from a modern analytical perspective may reflect a different conception of coherence,
            in which multiple versions of a figure or event could coexist without requiring resolution.
          </p>
          <h2 id="sources">Sources</h2>
          <p className="more-info-p">
            AI was used throughout the development of this dataset as a core tool in the initial generation
            and structuring of entries related to figures in Greek mythology. It assisted in compiling background
            information, organising genealogies, and producing draft descriptions based on known mythological material.
          </p>
          <p className="more-info-p">
            These AI-generated drafts were not treated as final content. Each entry was then manually reviewed, edited,
            and verified against external sources, including established reference works (such as Greek mythology dictionaries)
            and reputable online resources. Where sources differed, variant traditions were noted rather than removed,
            reflecting the inconsistency present in mythological records.
          </p>
          <p className="more-info-p">
            In this project, AI functioned as a primary support tool for data generation and organisation, while human
            review and external references were used to validate and refine the final dataset. AI was not used for
            image generation.
          </p>
          <h2 id="contact">Who made this?</h2>
          <p className="more-info-p">
            This was built by Simon Holt, a software developer focused on building full-stack web applications. Any
            queries, please contact on simonholt.dev@gmail.com.
          </p>
          <NavLink to="/" className="back-home-button">
          Home
          </NavLink>
        </div>
      </div>  
    </div>
  )
}

export default MoreInfo