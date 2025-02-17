import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { CarouselContainer, StepperStyled } from "./styles";
import { ProjetoAtualCard } from "../ActualProjectsCard";
import { Api } from "../../../../services/api/api";
import { IDemandsResponse } from "../../../../interface/TypesGlobal";
import { ContainerProjectEmpty } from "../PreviousProjects/style";
import { Text } from "../../../../styles/TypograpyText";
import { useUserContext } from "../../../../context/UserContext";

const ProjetosDisponiveis = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [filteredList, setFilteredList] = useState([] as IDemandsResponse[]);
  const { setLoading } = useUserContext();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const listAllDisponibleDemands = async () => {
    try {
      setLoading(true);
      const request = await Api.get("/jobs/?_expand=user");
      const response: IDemandsResponse[] = request.data;

      const filtered = response.filter((elem) => elem.status == "Pendente");
      setFilteredList(filtered);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    listAllDisponibleDemands();
  }, []);

  return filteredList.length > 0 ? (
    <CarouselContainer className="animate__animated animate__fadeIn">
      <ProjetoAtualCard
        listAllDisponibleDemands={listAllDisponibleDemands}
        obj={filteredList[activeStep]}
      />
      <StepperStyled
        variant="dots"
        steps={filteredList.length}
        position="static"
        activeStep={activeStep}
        sx={{
          flexGrow: 1,
          borderRadius: "20px",
          backgroundColor: "#467486",
          marginTop: "8px",
        }}
        nextButton={
          <Button
            size="small"
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 14,
            }}
            onClick={handleNext}
            disabled={activeStep === filteredList.length - 1}
          >
            Próximo
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 14,
            }}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Voltar
          </Button>
        }
      />
    </CarouselContainer>
  ) : (
    <ContainerProjectEmpty className="animate__animated animate__fadeIn">
      <Text fontSize="text3" color="success" className="message">
        Não temos nenhum projeto disponivel no momento, verifique novamente mais
        tarde!
      </Text>
    </ContainerProjectEmpty>
  );
};

export default ProjetosDisponiveis;
