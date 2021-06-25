import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ArticleToC from './ArticleToC'
import ArticleHermeneuticsLayer from './ArticleHermeneuticsLayer'
import ArticleScrollama from './ArticleScrollama'
import { LayerHermeneuticsStep, LayerHermeneutics } from '../../constants'


const ArticleText = ({
  memoid,
  paragraphs, paragraphsPositions, headingsPositions,
  onDataHrefClick,
  debug, height, width,
  title, abstract, keywords, contributor, publicationDate, url, disclaimer
}) => {
  const [currentStep, setCurrentStep] = useState({idx: -1, direction: 'down'})
  // get
  return (
    <div className="mt-5 ArticleText">
      <div className='ArticleText_toc' style={{
        position: 'fixed',
        top: 160,
        right: 70
      }}>
        <Container fluid style={{position: 'absolute'}}><Row><Col {...{
          md: { offset: 10, span: 2}
        }}>
          <div className="d-flex flex-row-reverse">
            <div className="mr-3">
              {/* <div className="rounded border border-dark">N</div>*/}
              <ArticleToC
                headingsPositions={headingsPositions}
                steps={paragraphs} active
                step={paragraphsPositions[currentStep.idx]}
              />
            </div>
          </div>
        </Col></Row></Container>
      </div>
      <ArticleHermeneuticsLayer
        memoid={memoid}
        height={height} width={width} title={title}
        abstract={abstract}
        keywords={keywords}
        contributor={contributor}
        publicationDate={publicationDate}
        url={url}
        disclaimer={disclaimer}
        onDataHrefClick={onDataHrefClick}
        cells={paragraphs.filter(d => [
          LayerHermeneuticsStep, LayerHermeneutics
        ].includes(d.layer))}
        />
      <div className="ArticleText_scrollama" style={{paddingBottom: 200}}>
        <ArticleScrollama
          memoid={memoid}
          cells={paragraphs}
          shadowLayers={[LayerHermeneuticsStep, LayerHermeneutics]}
          onDataHrefClick={onDataHrefClick}
          onStepChange={(step) => setCurrentStep(step)}
        />
      </div>
    </div>
  )
}

export default ArticleText;
