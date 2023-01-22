import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./OverlayTrigger.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function TooltipPositionedExample() {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Clique no botão para organizar o level.
            </Tooltip>
          }
        >
          <Button variant="secondary"><p className='h5'>Level</p></Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default TooltipPositionedExample;