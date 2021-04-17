import Link from 'next/link';
import Image from 'next/image';
import { convertTime } from '../utils/helper';

const RecipeCard = ({ recipe }) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields;

    const time = convertTime(cookingTime);

    return (
        <div className="card">
            <div className="featured">
                <Image 
                    src={'https:' + thumbnail.fields.file.url}
                    width={600}
                    height={400}
                />
            </div>
            <div className="content">
                <div className="info">
                    <h4>{ title }</h4>
                    <p>Takes approx { time } to prepare and cook</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>

            <style jsx>{`
                .card {
                    transform: rotateZ(-1deg);
                }
                .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -40px;
                    left: -10px;
                }
                .info {
                    padding: 16px;
                }
                .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                }
                .info p {
                    margin: 0;
                    color: #777;
                    font-size: 1.2rem;
                }
                .actions {
                    margin-top: 10px;
                    display: flex;
                    justify-content: flex-end;
                }
                .actions a {
                    color: #fff;
                    background: #f01b29;
                    padding: 16px 16px;
                    text-decoration: none;
                    font-size: 1.2rem;
                }
            `}</style>
        </div>
    );
}
 
export default RecipeCard;