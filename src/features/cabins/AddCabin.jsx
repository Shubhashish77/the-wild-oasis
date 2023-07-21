import React from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";




const AddCabin = () => {
    return (
        <div>
            <Modal>
                <Modal.Open opens="cabin-form">
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name="cabin-form">
                    <CreateCabinForm />
                </Modal.Window>
            </Modal>
        </div>
    )
}


// const AddCabin = () => {
//     const [isOpenModel, setIsOpenModal] = useState(false);

//     return (
//         <div>
//             <Button onClick={() => setIsOpenModal((show) => !show)}>
//                 Add new Cabin
//             </Button>
//             {isOpenModel && (
//                 <Model onClose={() => setIsOpenModal(false)}>
//                     <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//                 </Model>
//             )}
//         </div>
//     );
// };

export default AddCabin;
