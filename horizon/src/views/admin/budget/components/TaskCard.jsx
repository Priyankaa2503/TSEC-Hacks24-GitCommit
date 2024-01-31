import React, { useState } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
} from "@chakra-ui/react";

const TaskCard = ({ icon, title, subtitle, previousExpenses }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todoDetails, setTodoDetails] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleSaveExpense = () => {
    
    console.log("Expense Details:", todoDetails);
    console.log("Expense Amount:", expenseAmount);

    onClose(); // Close the modal after saving
  };

  return (
    <div className="rounded-md border p-4 bg-white shadow-md">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className=" flex items-center gap-2">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              {icon}
            </span>
          </div>
          <p className="text-gray-900">{subtitle}</p>
        </div>
        <hr className="my-3" />
        

        {/* Button to open the modal for entering new expenses */}
        <button
          onClick={onOpen}
          className="mt-2 rounded-md bg-blue-500 py-1 px-2 text-white"
        >
          Add Expense
        </button>
      </div>

      
      {/* <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD EXPENSE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex items-center gap-5">
              <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span className="flex items-center text-brand-500 dark:text-white">
                  {icon}
                </span>
              </div>
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>

           
            <Textarea
              placeholder="Enter details..."
              value={todoDetails}
              onChange={(e) => setTodoDetails(e.target.value)}
              mt={4}
            />

            
            <Input
              type="number"
              placeholder="Enter amount..."
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              mt={4}
            />
          </ModalBody>
          <p className="font-dm text-sm font-medium text-gray-600">
            Previous Expenses:
          </p>
          <ul className="list-disc pl-6">
            {previousExpenses.map((expense, index) => (
              <li
                key={index}
              >{`Details: ${expense.details}, Amount: $${expense.amount}`}</li>
            ))}
          </ul>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleSaveExpense}>
              SAVE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </div>
  );
};

export default TaskCard;
