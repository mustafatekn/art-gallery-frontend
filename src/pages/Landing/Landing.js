import DefaultLayout from '../../layouts/DefaultLayout'

export default function Landing() {
    return (
        <DefaultLayout>
            <div className="container mx-auto">
                <img
                    src="/assets/images/landing-cat.jpg"
                    className="mx-auto w-1/2 max-w-screen mt-12"
                    alt="rixusart-cat"
                />
            </div>
        </DefaultLayout>
    )
}
