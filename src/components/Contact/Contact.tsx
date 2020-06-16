import React, { useState, useCallback } from 'react';
import { Row, Col, Spinner, Alert } from 'reactstrap';
import { Input, ContentInput, Button } from './styles';
import { sendContact } from '../../services/api';

const AlertMssages: any = {
  danger: 'Não foi possivel enviar e-mail, tente novamete!',
  success: 'E-mail enviado com sucesso. Obrigado pelo contato!',
  default: '',
};

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = useCallback(
    async (event: React.FormEvent<EventTarget>) => {
      setLoading(true);
      event.preventDefault();
      try {
        await sendContact({ email });
        setEmail('');
        setAlert('success');
        setLoading(false);
      } catch (error) {
        setAlert('danger');
        setLoading(false);
      }
    },
    [email],
  );

  const handleOnCloseAlert = useCallback(() => {
    setAlert('');
  }, []);

  const handleOnChange = useCallback((event) => {
    setEmail(event.currentTarget.value);
  }, []);

  return (
    <form onSubmit={handleOnSubmit}>
      <Row className="justify-content-center">
        <Col
          xs={12}
          lg={{ size: 8, offset: 0 }}
          className="text-center text-lg-left"
        >
          <Alert color={alert} isOpen={!!alert} toggle={handleOnCloseAlert}>
            {AlertMssages[alert || 'default']}
          </Alert>
          <ContentInput className="align-items-center justify-content-around">
            <Col xs={12} lg={8} className="text-center text-lg-left">
              <Input
                placeholder="meuemail@chapa.com"
                autoComplete="false"
                autoCapitalize="false"
                type="email"
                value={email}
                onChange={handleOnChange}
              />
            </Col>
            <Col
              xs={{ size: 6 }}
              lg="auto"
              className="text-center py-3 pt-lg-3 justify-content-center align-items-center"
            >
              <Button
                className="w-100 w-lg-auto align-self-center"
                type="submit"
              >
                {loading ? <Spinner /> : <span>Enviar</span>}
              </Button>
            </Col>
          </ContentInput>
        </Col>
      </Row>
    </form>
  );
};

export default React.memo(Contact);
