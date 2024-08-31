import { createClient } from '@/utils/supabase/server';
import { SubmitButton } from '@/components/forms/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/forms/label';
import { FormMessage, Message } from '@/components/forms/form-message';
import { encodedRedirect } from '@/utils/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export default function CompleteRegistration({
  searchParams,
  accountId,
}: {
  searchParams: Message;
  accountId: string;
}) {
  const completeRegistration = async (formData: FormData) => {
    'use server';
    const supabase = createClient();
    const birthdate = formData.get('birthdate')?.toString();
    const genre = formData.get('genre')?.toString();
    const civil_state = formData.get('civil_state')?.toString();
    const birthplace = formData.get('birthplace')?.toString();
    const cep = formData.get('cep')?.toString();
    const address = formData.get('address')?.toString();
    const address_number = formData.get('address_number')?.toString();
    const address_neighborhood = formData
      .get('address_neighborhood')
      ?.toString();
    const state = formData.get('state')?.toString();
    const city = formData.get('city')?.toString();
    const state_of_birth = formData.get('state_of_birth')?.toString();
    const city_of_birth = formData.get('city_of_birth')?.toString();
    const phone_1 = formData.get('phone_1')?.toString();
    const identity_document = formData.get('identity_document')?.toString();
    const document_issuer = formData.get('document_issuer')?.toString();
    // Optional fields
    const address_complement = formData.get('address_complement')?.toString();
    const phone_2 = formData.get('phone_2')?.toString();
    const phone_3 = formData.get('phone_3')?.toString();
    const mom_name = formData.get('mom_name')?.toString();
    const dad_name = formData.get('dad_name')?.toString();
    const instagram_username = formData.get('instagram_username')?.toString();
    const facebook_url = formData.get('facebook_url')?.toString();

    if (
      !birthdate ||
      !genre ||
      !civil_state ||
      !birthplace ||
      !cep ||
      !address ||
      !address_number ||
      !address_neighborhood ||
      !state ||
      !city ||
      !state_of_birth ||
      !city_of_birth ||
      !phone_1 ||
      !identity_document ||
      !document_issuer
    ) {
      return { error: 'Campo(s) obrigatório(s) não preenchido(s)' };
    }

    const { error: error } = await supabase
      .from('students_registrations')
      .insert({
        birthdate: birthdate,
        genre: genre,
        civil_state: civil_state,
        birthplace: birthplace,
        cep: cep,
        address: address,
        address_number: address_number,
        address_neighborhood: address_neighborhood,
        state: state,
        city: city,
        state_of_birth: state_of_birth,
        city_of_birth: city_of_birth,
        phone_1: phone_1,
        identity_document: identity_document,
        document_issuer: document_issuer,
        address_complement: address_complement,
        phone_2: phone_2,
        phone_3: phone_3,
        mom_name: mom_name,
        dad_name: dad_name,
        instagram_username: instagram_username,
        facebook_url: facebook_url,
        account_id: accountId,
      });

    if (error) {
      console.error(
        'Accounts insert error:' + error?.code + ' ' + error?.message,
      );
      return encodedRedirect(
        'error',
        '/protected',
        'Erro tentando concluir cadastro.',
      );
    }

    return encodedRedirect(
      'success',
      '/protected',
      'Obrigado por concluir o seu cadastro! Fique a vontade para se inscrever em vagas.',
    );
  };

  if ('message' in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    );
  }
  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <main className="flex flex-1 flex-col gap-6">
          <h2 className="mb-4 mt-8 text-2xl font-bold">Estamos quase lá! 😁</h2>
          <form className="flex w-full max-w-md flex-col justify-center gap-2 text-foreground [&>input]:mb-6">
            <h1 className="text-2xl font-medium">
              Para continuar finalize o cadastro.
            </h1>
            <p className="text text-sm text-foreground/60">
              Precisamos dessas informações sobre você!
            </p>
            <div className="mt-8 grid grid-cols-6 gap-2 [&>input]:mb-3">
              <div className="col-span-3 flex flex-col">
                <Label htmlFor="genre">Gênero *</Label>
                <Select name="genre" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Gênero" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gênero</SelectLabel>
                      <SelectItem value="Masculino">Masculino</SelectItem>
                      <SelectItem value="Feminino">Feminino</SelectItem>
                      <SelectItem value="Outro">Outro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3 flex flex-col">
                <Label htmlFor="civil_state">Estado civil *</Label>
                <Select name="civil_state" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Estado civil" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Estado civil</SelectLabel>
                      <SelectItem value="Solteiro">Solteiro</SelectItem>
                      <SelectItem value="Casado">Casado</SelectItem>
                      <SelectItem value="Divorciado">Divorciado</SelectItem>
                      <SelectItem value="Viúvo">Viúvo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-4 flex flex-col">
                <Label htmlFor="identity_document">
                  Documento de identidade *
                </Label>
                <Input name="identity_document" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="document_issuer">Orgão emissor *</Label>
                <Input name="document_issuer" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="cep">CEP *</Label>
                <Input name="cep" required />
              </div>
              <div className="col-span-4 flex flex-col">
                <Label htmlFor="address">Endereço *</Label>
                <Input name="address" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="address_number">Número *</Label>
                <Input name="address_number" required />
              </div>
              <div className="col-span-4 flex flex-col">
                <Label htmlFor="address_complement">Complemento</Label>
                <Input name="address_complement" />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="address_neighborhood">Bairro *</Label>
                <Input name="address_neighborhood" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="state">Estado *</Label>
                <Input name="state" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="city">Cidade *</Label>
                <Input name="city" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="birthplace">Local de nascimento *</Label>
                <Input name="birthplace" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="state_of_birth">Estado de nascimento *</Label>
                <Input name="state_of_birth" required />
              </div>
              <div className="col-span-2 flex flex-col">
                <Label htmlFor="city_of_birth">Cidade de nascimento *</Label>
                <Input name="city_of_birth" required />
              </div>
              <div className="col-span-3 flex flex-col">
                <Label htmlFor="birthdate">Data de nascimento *</Label>
                <Input name="birthdate" required type="date" />
              </div>
              <div className="col-span-3 flex flex-col">
                <Label htmlFor="phone_1">Número para contato 1 *</Label>
                <Input name="phone_1" required />
              </div>
              <div className="col-span-3 flex flex-col">
                <Label htmlFor="phone_2">Número para contato 2</Label>
                <Input name="phone_2" />
              </div>
              <div className="col-span-3 flex flex-col">
                <Label htmlFor="phone_3">Número para contato 3</Label>
                <Input name="phone_3" />
              </div>
              <div className="col-span-6 flex flex-col">
                <Label htmlFor="mom_name">Nome completo da mãe</Label>
                <Input type="text" name="mom_name" placeholder="Dona Maria" />
              </div>
              <div className="col-span-6 flex flex-col">
                <Label htmlFor="dad_name">Nome completo do pai</Label>
                <Input name="dad_name" placeholder="Seu João" />
              </div>
              <div className="col-span-6 flex flex-col">
                <Label htmlFor="instagram_username">Usuário do instagram</Label>
                <Input
                  name="instagram_username"
                  placeholder="@nome_de_usuário"
                />
              </div>
              <div className="col-span-6 flex flex-col">
                <Label htmlFor="facebook_url">Link do facebook</Label>
                <Input
                  name="facebook_url"
                  placeholder="https://www.facebook.com/SuperEstagios"
                />
              </div>
              <div className="col-span-6 flex flex-col">
                <SubmitButton
                  formAction={completeRegistration}
                  pendingText="Enviando cadastro..."
                >
                  Enviar
                </SubmitButton>
              </div>
            </div>
            <FormMessage message={searchParams} />
          </form>
        </main>
      </div>
    </div>
  );
}
