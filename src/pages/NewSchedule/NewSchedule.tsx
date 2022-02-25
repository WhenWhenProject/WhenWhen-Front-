import styled, { css } from 'styled-components';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import PageTitleBar from '../../components/PageTitleBar';
import InputBlock from '../../components/newSchedule/InputBlock';
import {
  pencil,
  people_plus,
  clock,
  date_calendar,
  location_pin,
  time_clock,
} from '../../assets/NewSchedule/index';

type InputData = {
  name: string;
  location: string;
  duration: string;
  people: string;
  date: string;
  time: string;
};

const durationList = ['1시간', '2시간', '3시간', '4시간', '5시간', '6시간'];
const peopleList = ['1명', '2명', '3명', '4명'];

// 새로운 일정을 생성하는 페이지
const NewSchedule = () => {
  const methods = useForm<InputData>();
  const { watch, handleSubmit } = methods;

  // console.log(watch('name'));

  const onSubmit: SubmitHandler<InputData> = (data) => {
    console.log(data);
  };

  return (
    <StyledWrapper>
      <PageTitleBar title="일정 생성" />
      <div className="form-container">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 일정명 입력 받는 컴포넌트 */}
            <InputBlock
              img={pencil}
              altName="일정명"
              placeholder="일정명을 입력하세요"
              valueName="name"
              type="input"
            />
            {/* 모임 위치 입력 받는 div */}
            <InputBlock
              img={location_pin}
              altName="모임위치"
              placeholder="모임 위치를 입력하세요"
              valueName="location"
              type="input"
            />
            {/* 일정 소요 시간 입력 받는 div */}
            <InputBlock
              img={clock}
              altName="소요시간"
              placeholder="일정 소요 시간 설정"
              valueName="duration"
              type="select"
              options={durationList}
            />
            {/* 참여하는 인원 입력 받는 div */}
            <InputBlock
              img={people_plus}
              altName="참여 인원"
              placeholder="참여 인원 설정"
              valueName="people"
              type="select"
              options={peopleList}
            />
            {/* 조사할 기간 입력 받는 div */}
            <InputBlock
              img={date_calendar}
              altName="기간"
              placeholder="기간 설정"
              valueName="date"
              type="select"
            />
            {/* 시간대 입력 받는 div */}
            <InputBlock
              img={time_clock}
              altName="시간"
              placeholder="시간대 설정"
              valueName="time"
              type="select"
            />

            <div className="buttons-container">
              <button
                className="button__cancel"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <p>취소</p>
              </button>
              <button type="submit" className="button__submit">
                <p>일정 생성하기</p>
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </StyledWrapper>
  );
};

export default NewSchedule;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  ${centerAlign};
  flex-direction: column;
  margin-top: 80px;
  .form-container {
    margin-top: 3vh;
    width: 500px;
    height: 65vh;
    ${centerAlign};
    flex-direction: column;
    form {
      width: 100%;
      height: 100%;
      ${centerAlign};
      flex-direction: column;
    }
    .buttons-container {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      button {
        width: 40%;
        height: 50%;
        border: none;
        border-radius: 10px;
        p {
          color: #fff;
          font-size: 1rem;
        }
      }
      .button__cancel {
        background-color: #7d7d7d;
      }
      .button__submit {
        background-color: #000070;
      }
    }
  }
`;
